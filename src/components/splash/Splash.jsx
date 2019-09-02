import React, {useEffect} from "react";
import noise from './Noise.js'
import {isTouchDevice} from "../../utils";
import "./Splash.scss";

// Based on
// https://codepen.io/Tibixx/pen/NELrGJ
// https://codepen.io/perbyhring/pen/qZJOWZ
// https://codepen.io/Mamboleoo/pen/7363fad2aa95810e8e586248a785cc2d

    let lastMove = 0;

    let mousePos = {
        x: 0,
        y: 0
    };

    function onMouseMove (e) {
        let x = e.clientX;
        let y = e.clientY;
        updateMouse(x, y);
        lastMove = Date.now();
    }

    function updateMouse (x, y) {
        mousePos.x = x;
        mousePos.y = y;
    }

    let speed = 14;
    let randomness = 20;
    let brushSize = 30;

    let random = 2;
    let canvasInitiated = false;

    const MAX_DRAWS = 3500;

    /// galaxy draw

    function initCanvas(canvas){
        canvasInitiated = true;
        let totalWidth = canvas.offsetWidth;
        let totalHeight = canvas.offsetHeight;

        canvas.width = totalWidth;
        canvas.height = totalHeight;

        mousePos = {
            x: 0,
            y: 0
        };

        function adjustNoise(num){
            return num>0? Math.pow(num,2) : -Math.pow(num,2);
        }

        function mouseRAF(a) {
            if (a && Date.now() - lastMove > 500) {
                const s = 0.001 * (speed / 100);
                let noiseX = (noise.simplex3(1, 0, a * s) + 1) / 2;
                let noiseY = (noise.simplex3(11, 0, a * s) + 1) / 2;

                noiseX = adjustNoise(noise.simplex2(a * s, 0));
                noiseY = adjustNoise(noise.simplex2(a * s, 10));

                random += randomness / 1000;
                const randX = noise.simplex3(1, 0, random);
                const randY = noise.simplex3(3, 0, random);
                let x = noiseX * totalWidth/2 * 0.7 + totalWidth/2; // + randX;
                let y = noiseY * totalHeight/2 * 0.7 + totalHeight/2;// + randY;
                
                updateMouse(x, y);
            }

            if (drawCounter<MAX_DRAWS) {
                requestAnimationFrame(mouseRAF);
            }
        }

        var w = window.totalWidth;
        var h = window.totalHeight;

        window.onresize = function () {
            w = ctx.canvas.width = canvas.offsetWidth;
            h = ctx.canvas.height = canvas.offsetHeight;
        };

        var ctx = canvas.getContext("2d");

        let color = {r:123,g:48,b:193};
        let opacity = 0.05;
        let drawCounter = 0;



        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, w, h);

        ctx.globalCompositeOperation = "lighter";

        var randomNumbers = function randomNumbers(length) {return Array.from(new Array(length), function () {return Math.random();});};
        var TAU = Math.PI * 2;

        var createSmokeParticle = function createSmokeParticle() {
            var canvas = document.createElement("canvas");

            var w = 100;
            var h = 100;
            var cx = w * 0.5;
            var cy = h * 0.5;

            canvas.width = w;
            canvas.height = h;
            var ctx = canvas.getContext("2d");
            canvas.ctx = ctx;

            var xRand = -5 + Math.random() * 10;
            var yRand = -5 + Math.random() * 10;
            var xRand2 = 10 + Math.random() * (cx / 2);
            var yRand2 = 10 + Math.random() * (cy / 2);

            ctx.fillStyle = "rgba(" + color.r + "," + color.g + "," + color.b + ", "+opacity+")";

            Array.
            from(new Array(200), function () {return randomNumbers(3);}).
            forEach(function (p, i, arr) {
                var length = arr.length;
                var x = Math.cos(TAU / xRand / length * i) * p[2] * xRand2 + cx;
                var y = Math.sin(TAU / yRand / length * i) * p[2] * yRand2 + cy;

                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.arc(x, y, p[2] * 4, 0, TAU);
                ctx.fill();
            });

            return canvas;
        };

        var Particle = function Particle() {
            var p = this;
            p.osc1 = {
                osc: 0,
                val: 0,
                freq: Math.random() };

            p.osc2 = {
                osc: 0,
                val: 0,
                freq: Math.random() };
            p.counter = 0;
            p.x = mousePos.x;
            p.y = mousePos.y;
            p.size = 30 + Math.random() * 500;
            p.growth = Math.random() / 20;
            p.life = Math.random();
            p.opacity = Math.random() / 5;
            p.speed = {
                x: Math.random(),
                y: Math.random() };

            p.texture = createSmokeParticle();
            p.rotationOsc = Math.round(Math.random()) ? "osc1" : "osc2";
        };

        var particles = [];

        var update = function update() {

            particles.forEach(function (p, i) {
                p.x = mousePos.x;
                p.y = mousePos.y;
                p.size = Math.sqrt(Math.pow(p.x - p.ox, 2) + Math.pow(p.y - p.oy, 2)) * brushSize;
                p.counter += 0.01;
                p.growth = Math.sin(p.life);
                p.life -= 0.001;
                p.osc1.osc = Math.sin(p.osc1.val += p.osc1.freq);
                p.osc2.osc = Math.cos(p.osc2.val += p.osc2.freq);
                p.ox = p.x;
                p.oy = p.y;
            });
        };

        var render = function render() {
            particles.forEach(function (p) {
                ctx.save();
                
                ctx.globalAlpha = p.opacity / (p.size / 50);
                ctx.translate(p.x, p.y);
                ctx.rotate(Math.random() * TAU);
                ctx.drawImage(p.texture, 0 - p.size / 2, 0 - p.size / 2, p.size, p.size);


                // stars
                ctx.globalAlpha = 0.4
                ctx.beginPath();
                ctx.fillStyle = "rgba(" + (
                    155 + Math.round(Math.random() * 100)) + "," + (
                    155 + Math.round(Math.random() * 100)) + "," + (
                    155 + Math.round(Math.random() * 100)) + "," +
                    Math.random() + ")";

                ctx.arc(Math.random() * p.size, Math.random() * p.size, Math.random(), 0, TAU);
                ctx.fill();

                ctx.restore();
            });
        };

        var loop = function loop() {
            if (drawCounter < MAX_DRAWS) {
                update();
                render();
                window.requestAnimationFrame(loop);
                drawCounter++;
            }
            else{
                clearInterval(randomInterval);
                console.log('done drawing');
            }
        };

        particles = Array.from(new Array(10), function () {return new Particle();});

        let randomInterval = setInterval(function(){
            // speed =  Math.random() + 10;
            randomness = 5 + Math.random() * 30;
            brushSize = 20 + Math.random() * 40;
        }, 5000)

        loop();
        mouseRAF();
        canvas.addEventListener('mousemove', onMouseMove);
    }



function Splash(props) {
    let canvasRef = React.createRef();


    useEffect(() => {
        if (!isTouchDevice() && !canvasInitiated) {
            initCanvas(canvasRef.current);
        }
    });

    let titleText = (
    <React.Fragment>
        <h2>We're all about <em>choice</em></h2>
        <h3>Join our team and help us blur the lines between TV and video games</h3>
    </React.Fragment>
    );

    if (props.titleText) {
        let splitTitle = props.titleText.split(' ');
        let nonEm = splitTitle.slice(0,1).join(" ");
        let em = splitTitle.slice(1).join(" ");
        titleText = (
            <React.Fragment>
                <h2 className="positionTitle">{nonEm} <em>{em}</em></h2>
                <h3>Join our team and help us blur the lines between TV and video games</h3>
            </React.Fragment>
        );
    }

    return (
        <section className="splash">
            <canvas ref={canvasRef} />
            <div className="content">
                <div className="left">
                    <div className="titleContainer">
                        <h1>Eko</h1>
                        <h2>Engineering</h2>
                    </div>
                </div>
                <div className="right">
                    {titleText}
                    {
                        !props.hideCTA &&
                        (<a className="zoomInButton vaporButton" href="/#careers">
                            <div className="frameContent">Zoom In</div>
                        </a>)
                    }
                </div>
            </div>
        </section>
    );
}

export default Splash;
