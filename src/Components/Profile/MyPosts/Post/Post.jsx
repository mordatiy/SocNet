import c from './Post.module.css'

const Post = (props) => {
    // console.log(props.message)
    return (
        <div className={c.item}>
            <img src="https://w7.pngwing.com/pngs/85/114/png-transparent-avatar-user-profile-male-logo-profile-icon-hand-monochrome-head.png" alt=""/>
            <div>
                {props.message}
            </div>
            <div>
                <span>likes</span>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;