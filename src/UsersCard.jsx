function UsersCard (nodle) {
    return(
        <div className="Users">
            <h1>{nodle.name}</h1>
            <p>Age: {nodle.age}</p>
            <p>Email {nodle.email}</p>
        </div>
    )
}