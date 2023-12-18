import { Link, Route, Routes } from "react-router-dom";
import HomePage from "../../../pages/site-customer/homepage/home-page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./header.css";
const HeaderComponent = () => {
  return (
    <header id="header">
      <div class="container">
        <div class="headerMain">
          <div class="headerleft">
            <a href="/">Ecommerce</a>
          </div>
          <div class="headerCenter">
            <div class="headerSearch">
              <form action="">
                <input
                  type="text"
                  id="search"
                  placeholder="Tìm kiếm sản phẩm ..."
                />
                <button onclick="">
                  <i class="bi bi-search"></i>
                </button>
              </form>
            </div>
          </div>
          <div class="headerRight">
            <a href="">
              <i class="bi bi-person"></i>
            </a>
            <a href="">
              <i class="bi bi-heart"></i>
            </a>
            <a href="">
              <i class="bi bi-cart"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="headerMenu">
        <div class="headerMenuMainCenter container">
          <a href="">laptop</a>
          <a href="">Màn Hình</a>
          <a href="">Bàn Phím</a>
          <a href="">Chuột-Lót Chuột</a>
          <a href="">Tai nghe-Loa</a>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
