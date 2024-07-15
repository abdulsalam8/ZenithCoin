import React from "react";
import "./bottom.css";
const BottomBar: React.FC = () => {
  const uls = document.querySelectorAll("ul");

uls.forEach((ul) => {
  const resetClass = ul.parentNode.getAttribute("class");
  const lis = ul.querySelectorAll("li");

  lis.forEach((li) => {
    li.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const target = e.currentTarget;

      if (
        target.classList.contains("active") ||
        target.classList.contains("follow")
      ) {
        return;
      }

      ul.parentNode.setAttribute(
        "class",
        `${resetClass} ${target.getAttribute("data-where")}-style`
      );

      lis.forEach((item) => clearClass(item, "active"));

      setClass(target, "active");
    });
  });
});

function clearClass(node, className) {
  node.classList.remove(className);
}

function setClass(node, className) {
  node.classList.add(className);
}
  return (
    <div className="container stage">
      <div className="container">
        <div className="tabbar tab-style3">
          <ul className="flex-center">
            <li className="home active" data-where="home">
              <span className="material-icons-outlined">home</span>
            </li>
            <li className="products" data-where="products">
              <span className="material-icons-outlined">shopping_bag</span>
            </li>
            <li className="services" data-where="services">
              <span className="material-icons-outlined">plumbing</span>
            </li>
            <li className="about" data-where="about">
              <span className="material-icons-outlined">business</span>
            </li>
            <li className="help" data-where="help">
              <span className="material-icons-outlined">help_outline</span>
            </li>
            <li className="follow"> </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="tabbar tab-style2">
          <ul className="flex-center">
            <li className="home active" data-where="home">
              <span className="material-icons-outlined">home</span>
            </li>
            <li className="products" data-where="products">
              <span className="material-icons-outlined">shopping_bag</span>
            </li>
            <li className="services" data-where="services">
              <span className="material-icons-outlined">plumbing</span>
            </li>
            <li className="about" data-where="about">
              <span className="material-icons-outlined">business</span>
            </li>
            <li className="help" data-where="help">
              <span className="material-icons-outlined">help_outline</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="tabbar tab-style1">
          <ul className="flex-center">
            <li className="home active" data-where="home">
              <span className="material-icons-outlined">home</span>
            </li>
            <li className="products" data-where="products">
              <span className="material-icons-outlined">shopping_bag</span>
            </li>
            <li className="services" data-where="services">
              <span className="material-icons-outlined">plumbing</span>
            </li>
            <li className="about" data-where="about">
              <span className="material-icons-outlined">business</span>
            </li>
            <li className="help" data-where="help">
              <span className="material-icons-outlined">help_outline</span>
            </li>
            <li className="follow"> </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="tabbar tab-style4">
          <ul className="flex-center">
            <li className="home active" data-where="home">
              <span className="material-icons-outlined">home</span>
            </li>
            <li className="products" data-where="products">
              <span className="material-icons-outlined">shopping_bag</span>
            </li>
            <li className="services" data-where="services">
              <span className="material-icons-outlined">plumbing</span>
            </li>
            <li className="about" data-where="about">
              <span className="material-icons-outlined">business</span>
            </li>
            <li className="help" data-where="help">
              <span className="material-icons-outlined">help_outline</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="tabbar tab-style5">
          <ul className="flex-center">
            <li className="home active" data-where="home">
              <span className="material-icons-outlined">home</span>
            </li>
            <li className="products" data-where="products">
              <span className="material-icons-outlined">shopping_bag</span>
            </li>
            <li className="services" data-where="services">
              <span className="material-icons-outlined">plumbing</span>
            </li>
            <li className="about" data-where="about">
              <span className="material-icons-outlined">business</span>
            </li>
            <li className="help" data-where="help">
              <span className="material-icons-outlined">help_outline</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
