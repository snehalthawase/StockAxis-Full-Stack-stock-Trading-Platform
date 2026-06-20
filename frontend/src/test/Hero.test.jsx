import React from 'react'
import '@testing-library/jest-dom'
import { render , screen } from "@testing-library/react";
import { describe , test , expect } from 'vitest';
import Hero from '../Landing_page/Home/Hero';


//suite
describe('Hero Component', () => {
test("render hero image",()=>{
  render(<Hero/>);
  const heroImage = screen.getByAltText("Hero Image");
  expect(heroImage).toBeInTheDocument();
  expect(heroImage).toHaveAttribute("src","media/images/homeHero.png");
    });

    test("render signup button",()=>{
      render(<Hero/>);
      const signUpButton = screen.getByRole("button");
      expect(signUpButton).toBeInTheDocument();
      expect(signUpButton).toHaveClass("rounded");
    });
 
})