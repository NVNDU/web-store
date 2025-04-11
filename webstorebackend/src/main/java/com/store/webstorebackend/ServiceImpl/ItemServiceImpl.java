package com.store.webstorebackend.ServiceImpl;

import com.store.webstorebackend.Service.ItemService;
import com.store.webstorebackend.entity.Item;
import com.store.webstorebackend.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class ItemServiceImpl implements ItemService {
    private ItemRepository itemRepository;

    @Autowired
    ItemServiceImpl(ItemRepository itemRepository){
        this.itemRepository= itemRepository;
    }

    @Override
    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }
    @Override
    public Item getItemById(Integer id) {
        return itemRepository.findById(id).orElseThrow(()->new NoSuchElementException("Item not found"));
    }
    @Override
    public Item addItem(Item item) {
        return itemRepository.save(item);
    }
    @Override
    public Item updateItem(Integer id, Item item) {
        Item existingItem = getItemById(id);
        existingItem.setName(item.getName());
        existingItem.setDescription(item.getDescription());
        existingItem.setPrice(item.getPrice());

        return itemRepository.save(existingItem);
    }
    @Override
    public void deleteItem(Integer id) {
        itemRepository.deleteById(id);
    }

}
