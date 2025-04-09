package com.example.AppChat.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;



@Controller

public class authController {
@GetMapping("/auth")
public String showAuthPagr() {
    return "auth";
}

    
}
