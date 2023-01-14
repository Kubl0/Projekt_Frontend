export default function CommentInfo({comment}) {
    return (
        <div className="commentInfo">
            <p>{comment.user}:{comment.comment}</p>
        </div>
    );
}