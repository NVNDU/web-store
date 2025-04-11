package com.store.webstorebackend.ServiceImpl;

import com.store.webstorebackend.Service.SubCategoryService;
import com.store.webstorebackend.entity.SubCategory;
import com.store.webstorebackend.repository.SubCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class SubCategoryServiceImpl implements SubCategoryService {
    private SubCategoryRepository subCategoryRepository;

    @Autowired
    SubCategoryServiceImpl(SubCategoryRepository subCategoryRepository){
        this.subCategoryRepository=subCategoryRepository;
    }
    @Override
    public List<SubCategory> getALLSubCategories() {
        return subCategoryRepository.findAll();
    }

    @Override
    public SubCategory getSubCategoryById(Integer id) {
        return subCategoryRepository.findById(id).orElseThrow(()->new NoSuchElementException("sub-category not found"));
    }
}
