import Panel from "../panel/Panel";
import "./Home.scss"

export default function Home() {
  return (
    <div className="todopy">
      <Panel />
      <div className="todopyLeft">
        <h1>Welcome to ToDoPy</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet rerum pariatur accusamus molestias itaque? Quas facere recusandae eius sed, soluta cupiditate aperiam repellendus consectetur deserunt exercitationem nulla incidunt error rem.
          Officiis quia veniam assumenda animi corporis eius quae saepe earum quis tempora? Nostrum deserunt quod minima labore sapiente laborum aspernatur vitae eligendi, mollitia aliquid vero error earum natus ipsa a.
          Dolor ipsum quos sit magnam esse, magni natus modi at quaerat recusandae aspernatur eum aliquam perferendis fugit aperiam? Quaerat eligendi error sunt assumenda corrupti. Ipsa odit provident eius voluptate nostrum.
          {" "}
        </p>
        <button>Go to task</button>
      </div>

    </div>
  );
}
