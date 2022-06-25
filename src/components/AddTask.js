import { useState } from "react";

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState('');

    const submit = (e) => {
        e.preventDefault();

        if (!text) {
            alert('لطفا یک تسک اضافه کنید');
            return;
        }

        onAdd({text, day, reminder});
        
        setText('');
        setDay('');
        setReminder(false);
    }
    return (
        <form className='add-form' onSubmit={submit}>
            <div className='form-control'>
                <label>تسک</label>
                <input 
                type="text" 
                placeholder="افزودن تسک"
                className="add-task-input"
                value={text}
                onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>روز</label>
                <input type="text" placeholder="روز مورد نظر را وارد کنید"
                value={day}
                className="add-task-input"
                onChange={(e) => setDay(e.target.value)}
                 />
            </div>
            <div className='form-control form-control-check'>
                <label>یادآوری شود</label>
                <input type="checkbox" checked={reminder} value={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type="submit" value="افزودن تسک" className='btn btn-block' />
        </form>
    )
}

export default AddTask
