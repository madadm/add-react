import NewMeetupForm from "../components/meetups/NewMeetupForm.js";
import {useHistory} from "react-router-dom";


function NewMeetups() {

    const history = useHistory();
    function addMeetupHandler(meetupData) {

        fetch('https://react-p-35c4a-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(()=>{
            // eslint-disable-next-line no-restricted-globals
            history.replace('/');
        });
    }

    return (
        <section>
            <h1>Add new Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    );
}

export default NewMeetups;