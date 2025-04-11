package com.store.webstorebackend.Controller;

import com.store.webstorebackend.Service.ItemService;
import com.store.webstorebackend.entity.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/items")
public class ItemController {
    private ItemService itemService;

    @Autowired
    ItemController(ItemService itemService){
        this.itemService=itemService;
    }

    @GetMapping
    public List<Item> getAllItems(){
        return itemService.getAllItems();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Item> getItemById(@PathVariable Integer id){
        try{
            Item slecteditem=itemService.getItemById(id);
            return ResponseEntity.status(HttpStatus.FOUND).body(slecteditem);
        }catch(NoSuchElementException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PostMapping
    public ResponseEntity<Item> addItem(@RequestBody Item item){
        try{
            Item newItem=itemService.addItem(item);
            return ResponseEntity.status(HttpStatus.OK).body(newItem);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Item> updateItem(@PathVariable Integer id, @RequestBody Item item){
        try{
            Item updatedItem = itemService.updateItem(id, item);
            return ResponseEntity.status(HttpStatus.OK).body(updatedItem);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.OK).body(null);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable Integer id){
        try{
            itemService.deleteItem(id);
            return ResponseEntity.status(HttpStatus.OK).body(null);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
