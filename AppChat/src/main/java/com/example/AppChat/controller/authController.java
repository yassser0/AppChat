package com.example.AppChat.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;



@Controller

public class AuthController {
@GetMapping("/")
public String showAuthPage() {
    return "auth";
}

    
}
