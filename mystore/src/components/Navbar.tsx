import React from "react";

export const Navbar: React.FunctionComponent = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="index.html">
      Многочлены и алгебраические уравнения
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="tasks.html">
            Задачи
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="form.html">
            Форма ввода
          </a>
        </li>
      </ul>
    </div>
  </nav>
);
