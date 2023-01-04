import React from 'react';
import Button from "./UI/Button";


const MainPost = (props) => {

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.desc}
                </div>
            </div>
            <div className="post__btns">
                <Button onClick={() => props.remove(props.post)}>
                    Удалить
                </Button>
            </div>
        </div>
    );
};

export default MainPost;