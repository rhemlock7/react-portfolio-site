
function Contact() {
    return (
        <div>
            <h1>Contact</h1>
            <p>Fill out the form below to get in touch.</p>

            <form className="mt-5 md:w-1/2">
                <div className="flex flex-col items-start md:w-3/4">
                    <label>Name:</label>
                    <input placeholder="Name" type="text"></input>
                </div>
                <div className="mt-2 flex flex-col items-start md:w-3/4">
                    <label>Email:</label>
                    <input placeholder="Email" type="email"></input>
                </div>
                <div className="mt-2 flex flex-col items-start md:w-3/4">
                    <label>Message:</label>
                    <textarea placeholder="Message text here" />
                </div>
                <button type="submit" className="mt-3">Submit</button>
            </form>
        </div>
    )
}

export default Contact
