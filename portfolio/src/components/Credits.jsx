function Credits(props) {
  return (
    <div className={`credits-container ${props.isLight && "light"}`}>
      <div>
        <a target="_blank" href="https://icons8.com/icon/Pxe6MGswB8pX/ejs">
          EJS
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href="https://icons8.com/icon/kg46nzoJrmTR/express-js"
        >
          Express Js
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </div>
      <div>
        <a target="_blank" href="https://icons8.com/icon/hsPbhkOH4FMe/node-js">
          nodejs
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </div>
      <a href="https://www.flaticon.com/free-icons/github" title="github icons">
        Github icons created by Freepik - Flaticon
      </a>

      <div>
        {" "}
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">
          {" "}
          Good Ware{" "}
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com'
        </a>
        <a href="https://www.flaticon.com/free-icons/idea" title="idea icons">
          Idea icons created by Good Ware - Flaticon
        </a>
      </div>
      <a href="https://www.flaticon.com/free-icons/link" title="link icons">
        Link icons created by Freepik - Flaticon
      </a>
    </div>
  );
}

export default Credits;
