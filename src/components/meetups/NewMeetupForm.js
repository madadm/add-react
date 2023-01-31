import styles from './NewMeetupForm.module.css';
import Card from "../ui/Card";
import {useRef} from "react";

function NewMeetupForm(props) {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();
    function submitHandler(event)
    {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const imageTitle = imageInputRef.current.value;
        const addressTitle = addressInputRef.current.value;
        const descriptionTitle = descriptionInputRef.current.value;

        const meetupData = {
            title : enteredTitle,
            image : imageTitle,
            address : addressTitle,
            description : descriptionTitle
        };
        props.onAddMeetup(meetupData);
    }

    return (
     <Card>
            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.control}>
                    <label htmlFor={'title'}>Meetup Title</label>
                    <input type='text' required id='title' ref={titleInputRef}/>
                </div>
                <div className={styles.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' required id='image' ref={imageInputRef}/>
                </div>
                <div className={styles.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' required id='address' ref={addressInputRef}/>
                </div>
                <div className={styles.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' required rows='5' ref={descriptionInputRef}/>
                </div>
                <div className={styles.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
         </Card>
    );

}

export default NewMeetupForm;