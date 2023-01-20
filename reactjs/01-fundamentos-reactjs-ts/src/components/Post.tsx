import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

interface Author {
    name: string;
    role: string;
    avatarUrl: string
}
interface Content {
    type: "paragraph" | "link";
    content: string;
}
interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[]
}

export function Post({author, publishedAt, content}:PostProps){
    const [comments, setComments] = useState(["Post muito bacana, hein?!"]);
    const [newCommentText, setNewCommentText] = useState('');

    const publishedAtDateTimeFormatted = format(publishedAt, "d 'de' MMMM 'ás' H:mm'h", {
        locale: ptBR
    });

    const publishedDateTimeRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();

        setComments([...comments, newCommentText]);

        setNewCommentText('');
    }
    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }
    function deleteComment(commentToDelete:string) {
        const commentWithDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        });

        setComments(commentWithDeletedOne);
    }
    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse camopo e obrigatorio');   
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                
                    <div className={styles.authorInfo}> 
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time 
                    title={publishedAtDateTimeFormatted} 
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedDateTimeRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {

                    if(line.type == 'paragraph'){
                        console.log("ADFSDAFASDFASDFADFASDFADFAF");
                        return <p key={line.content}>{ line.content }</p>
                    } else if(line.type  == 'link'){
                        return <p key={line.content}><a href="">{ line.content }</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name="comment"
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    required
                    onInvalid={handleNewCommentInvalid}
                    placeholder="deixe seu comentário"
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map(comment => {
                        return (
                            <Comment
                                key={comment} 
                                content={ comment }
                                onDeleteComment={deleteComment}
                            />)
                    })
                }
            </div>
        </article>
    );
}