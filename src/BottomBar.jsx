import React, { useState, useEffect, TouchEvent } from "react";

const BottomBar: React.FC = () => {
  return (
    <div class="container stage">
      <div class="container">
        <div class="tabbar tab-style3">
          <ul class="flex-center">
            <li class="home active" data-where="home">
              <span class="material-icons-outlined">home</span>
            </li>
            <li class="products" data-where="products">
              <span class="material-icons-outlined">shopping_bag</span>
            </li>
            <li class="services" data-where="services">
              <span class="material-icons-outlined">plumbing</span>
            </li>
            <li class="about" data-where="about">
              <span class="material-icons-outlined">business</span>
            </li>
            <li class="help" data-where="help">
              <span class="material-icons-outlined">help_outline</span>
            </li>
            <li class="follow"> </li>
          </ul>
        </div>
      </div>

      <div class="container">
        <div class="tabbar tab-style2">
          <ul class="flex-center">
            <li class="home active" data-where="home">
              <span class="material-icons-outlined">home</span>
            </li>
            <li class="products" data-where="products">
              <span class="material-icons-outlined">shopping_bag</span>
            </li>
            <li class="services" data-where="services">
              <span class="material-icons-outlined">plumbing</span>
            </li>
            <li class="about" data-where="about">
              <span class="material-icons-outlined">business</span>
            </li>
            <li class="help" data-where="help">
              <span class="material-icons-outlined">help_outline</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="container">
        <div class="tabbar tab-style1">
          <ul class="flex-center">
            <li class="home active" data-where="home">
              <span class="material-icons-outlined">home</span>
            </li>
            <li class="products" data-where="products">
              <span class="material-icons-outlined">shopping_bag</span>
            </li>
            <li class="services" data-where="services">
              <span class="material-icons-outlined">plumbing</span>
            </li>
            <li class="about" data-where="about">
              <span class="material-icons-outlined">business</span>
            </li>
            <li class="help" data-where="help">
              <span class="material-icons-outlined">help_outline</span>
            </li>
            <li class="follow"> </li>
          </ul>
        </div>
      </div>

      <div class="container">
        <div class="tabbar tab-style4">
          <ul class="flex-center">
            <li class="home active" data-where="home">
              <span class="material-icons-outlined">home</span>
            </li>
            <li class="products" data-where="products">
              <span class="material-icons-outlined">shopping_bag</span>
            </li>
            <li class="services" data-where="services">
              <span class="material-icons-outlined">plumbing</span>
            </li>
            <li class="about" data-where="about">
              <span class="material-icons-outlined">business</span>
            </li>
            <li class="help" data-where="help">
              <span class="material-icons-outlined">help_outline</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="container">
        <div class="tabbar tab-style5">
          <ul class="flex-center">
            <li class="home active" data-where="home">
              <span class="material-icons-outlined">home</span>
            </li>
            <li class="products" data-where="products">
              <span class="material-icons-outlined">shopping_bag</span>
            </li>
            <li class="services" data-where="services">
              <span class="material-icons-outlined">plumbing</span>
            </li>
            <li class="about" data-where="about">
              <span class="material-icons-outlined">business</span>
            </li>
            <li class="help" data-where="help">
              <span class="material-icons-outlined">help_outline</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
