package com.recipe.manager.controller;

import com.recipe.manager.model.Recipe;
import com.recipe.manager.repository.RecipeRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recipes")
public class RecipeController {

    @Autowired
    private RecipeRepository recipeRepository;

    @PostMapping
    public Recipe createRecipe(@Valid @RequestBody Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    @GetMapping
    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }
}
