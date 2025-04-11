package com.store.webstorebackend.Controller;

import com.store.webstorebackend.Service.SubCategoryService;
import com.store.webstorebackend.entity.SubCategory;
import com.store.webstorebackend.repository.SubCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/subcategories")
public class SubCategoryController {
    private SubCategoryService subCategoryService;

    @Autowired
    SubCategoryController(SubCategoryService subCategoryService){
        this.subCategoryService=subCategoryService;
    }

    @GetMapping
    public List<SubCategory> getAllSubCategories(){
        return subCategoryService.getALLSubCategories();
    }

    @GetMapping("/{id}")
    public ResponseEntity<SubCategory> getSubCategoryById(@PathVariable Integer id){
        try{
            SubCategory response=subCategoryService.getSubCategoryById(id);
            return ResponseEntity.status(HttpStatus.OK).body(response);
        }catch(NoSuchElementException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
