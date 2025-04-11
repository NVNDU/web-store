package com.store.webstorebackend.Service;

import com.store.webstorebackend.entity.Item;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface ItemService {
    List<Item> getAllItems();
    Item getItemById(Integer id);
    Item addItem(Item item);
    Item updateItem(Integer id,Item item);
    void deleteItem(Integer id);
}
