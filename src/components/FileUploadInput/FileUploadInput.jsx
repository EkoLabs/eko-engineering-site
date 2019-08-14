import React, {useEffect} from 'react';
import './FileUploadInput.scss';

function onInputChange(e){
    let input = e.currentTarget;
    let label	 = input.nextElementSibling;
    let labelVal = label.innerHTML;

    let fileName = '';
    if( input.files && input.files.length > 1 )
        fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', input.files.length );
    else
        fileName = e.target.value.split( '\\' ).pop();

    if( fileName )
        label.querySelector( 'span' ).innerHTML = fileName;
    else
        label.innerHTML = labelVal;
}

// Firefox bug fix
function onFocus(e){
    let input = e.currentTarget;
    input.classList.add( 'has-focus' );
}

function onBlur(e){
    let input = e.currentTarget;
    input.classList.remove( 'has-focus' );
}

function FileUploadInput(props){

    return (
        <div className="fileUploadInput">
            <input type="file" id="file-2" className="inputfile inputfile-2"
                   data-multiple-caption="{count} files selected"
                   name={props.name}
                   onChange={onInputChange}
                   onFocus={onFocus}
                   onBlur={onBlur}
                   required={props.required}
            />
            <label htmlFor = "file-2" >
                <svg
                xmlns = "http://www.w3.org/2000/svg"
                width = "20"
                height = "17"
                viewBox = "0 0 20 17" > < path
                d = "M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" / > < /svg> <span>Choose a file&hellip;</span >
            </label>
        </div>
    );
}

export default FileUploadInput;