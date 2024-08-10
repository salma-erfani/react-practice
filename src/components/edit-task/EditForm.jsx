const EditForm = ({ title, priority, onChangeTitle, onChangePriority }) => {
    return (
        <div className="content-input">
            <div className="input-group">
                <div className="text-wrap">
                    <label htmlFor="title">title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={onChangeTitle}
                        placeholder="title"
                    />
                </div>
            </div>
            <div className="input-group">
                <div className="text-wrap">
                    <label htmlFor="priority">priority</label>
                    <input
                        id="priority"
                        type='text'
                        value={priority}
                        onChange={onChangePriority}
                        placeholder="priority"
                    />
                </div>
            </div>
        </div>
    )
}

export default EditForm
