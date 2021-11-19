import { useState} from 'react';
// import FunctionalComponentDemo from './FunctionalComponentDemo';
import PropTypes from 'prop-types';

const PropsDemo = () => {
    // These state values are storing style properties that will show up within our parent class component
    const [color, setColor] = useState('white');
    const [backgroundColor, setBackgroundColor] = useState('purple');
    const [borderRadius, setBorderRadius] = useState('5px');
    const [borderStyle, setBorderStyle] = useState('dashed');
    const [display, setDisplay] = useState('inline-block');
    const [width, setWidth] = useState('350px');
    const [textAlign, setTextAlign] = useState('center');

    // We also need to create an object in our component to pass the styles off as a styling prop to the new div we've created
    let styles = {
        color: color,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        borderStyle: borderStyle,
        display: display,
        width: width,
        textAlign: textAlign
    };

    const toggleColor = () => {
        color === 'white' ? setColor('pink') : setColor('white');
    }
    const toggleBackgroundColor = () => {
        backgroundColor === 'purple' ? setBackgroundColor('black'): setBackgroundColor('purple');
    }
    const toggleBorderRadius = () => {
        borderRadius === '5px' ? setBorderRadius ('20px'): setBorderRadius('5px');
    }
    const toggleBorderStyle = () => {
        borderStyle === 'dashed' ? setBorderStyle('double'): setBorderStyle('dashed');
    }
    return (
        <div className='main'>
            <div className='mainDiv'>
                <div style={styles}>
                    <FunctionalComponent string="Color Toggle" function={toggleColor} selectedStyle={color} />
                    <FunctionalComponent string="Background Color Toggle" function={toggleBackgroundColor} selectedStyle={backgroundColor} />
                    <FunctionalComponent string="Border Radius Toggle" function={toggleBorderRadius} selectedStyle={borderRadius} />
                    <FunctionalComponent string="Border Style Toggle" function={toggleBorderStyle} selectedStyle={borderStyle} />
                </div>
            </div>
        </div>
    );
};

export default PropsDemo;

const FunctionalComponent = (props) => {
    return (
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>Toggle Style</button>
            <TinyComponent selectedStyle ={props.selectedStyle} />
        </div>
    );
};

const TinyComponent = (props) => {
    return(
        <div>
            <p>The current style is: {props.selectedStyle}</p>
        </div>
    )
    
};
FunctionalComponent.defaultProps = {
    string: 'This is wild!',
    function: () => console.log('Can I see this is my dev tools?'),
    selectedStyle: 'what Style??'
};

FunctionalComponent.propsTypes = {
    string: PropTypes.string.isRequired,
    function:PropTypes.func.isRequired,
    selectedStyle: PropTypes.string.isRequired
};