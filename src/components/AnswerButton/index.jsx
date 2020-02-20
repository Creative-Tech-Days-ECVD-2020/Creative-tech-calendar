import React from 'react';
import { Link } from "react-router-dom";

const AnswerButton = ({name, route}) => (
    <button>
        <Link to={ route }>{ name }</Link>
    </button>
);

export default AnswerButton;