import React from 'react';
import { Button, Link } from '@chakra-ui/react';
import MANOJ_PADHY_RESUME from '../MANOJ_PADHY_RESUME.pdf'
const onClickhandler = () => {
    return window.open(
        "https://drive.google.com/file/d/1HhD1HLlvqN9gru7-09czN3yvpvIvYQh2/view?usp=sharing",
        "_blank"
    );
};

const Resume = () => {

    return (
        <div class="nav-link resume">

            <Button

                colorScheme='teal' variant="ghost"
                _hover={{ textDecoration: 'none', bg: 'teal.50' }}
                as={Link}
                target="_blank"
                id="resume-button-1"
                href={MANOJ_PADHY_RESUME}
                download={true}
                onClick={onClickhandler}
            >
                Resume
            </Button>

        </div>
    );
}

export default Resume;

export const Resume2 = ({ close }) => {

    return (
        <div>

            <Button
                w="full"
                colorScheme='teal' variant="ghost"
                _hover={{ textDecoration: 'none', bg: 'teal.50' }}
                as={Link}
                target="_blank"
                href={MANOJ_PADHY_RESUME}
                download={true}
                onClick={() => {
                    onClickhandler();
                    close()
                }}
            >
                Resume
            </Button>

        </div>
    );
}

