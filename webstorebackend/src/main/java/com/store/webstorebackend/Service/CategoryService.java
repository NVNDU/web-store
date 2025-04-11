package com.store.webstorebackend.Service;

import com.store.webstorebackend.entity.Category;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface CategoryService {
    List<Category> getAllCategories();
    Category getCategoryById(Integer id);
}
