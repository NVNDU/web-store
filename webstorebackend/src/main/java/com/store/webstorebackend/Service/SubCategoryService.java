package com.store.webstorebackend.Service;

import com.store.webstorebackend.entity.SubCategory;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface SubCategoryService {
    List<SubCategory> getALLSubCategories();
    SubCategory getSubCategoryById(Integer id);
}
