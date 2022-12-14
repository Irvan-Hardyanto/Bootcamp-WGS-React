import React from 'react';

//Komponen ini menyatakan sebuah komentar
class Comment extends React.Component {

    //konstruktor untuk insialisasi state
    constructor(props) {
        super(props);
        this.state = {//state 'likes' yang menyatakan jumlah like pada sebuah komentar
            likes: 0
        }
        this.like=this.like.bind(this);
    }

     //fungsi untuk menambahkan jumlah like pada sebuah komentar setiap kali tombol like ditekan
    like(){
        this.setState((state,props)=>({
            likes: state.likes + 1
        }))
    }
    render() {
        return (
            <div className="ui container comments">
                <div className="comment">
                    <a href="/" className='avatar'>
                        <img alt="avatar" src={this.props.avatar} />
                    </a>
                    <div className='content'>
                        <a href="/" className='author'>
                            {this.props.name}
                        </a>
                        <div className="metadata">
                            <span className='date'>Today at {this.props.time} | Liked by: {this.state.likes}</span>
                        </div>
                        <div className="text">
                            {this.props.comment}
                        </div>
                        <div className="actions">
                            <div className="mini ui button" onClick={this.like}>
                                <i className="heart icon"></i> Like
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Comment;