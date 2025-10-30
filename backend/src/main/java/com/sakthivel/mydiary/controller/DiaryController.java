package com.sakthivel.mydiary.controller;

import com.sakthivel.mydiary.dto.Response;
import com.sakthivel.mydiary.model.Diary;
import com.sakthivel.mydiary.service.DiaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DiaryController {

    private DiaryService diaryService;

    public DiaryController(@Autowired DiaryService diaryService) {
        this.diaryService = diaryService;
    }

    @GetMapping
    public String get() {
        return "API Working";
    }

    @GetMapping("/list")
    public ResponseEntity<Response<List<Diary>>> getAllRecordsByEmail(@RequestParam String email) {
        return diaryService.getAllRecordsByEmail(email);
    }

    @GetMapping("/get")
    public ResponseEntity<Response<Diary>> getSingleDiaryRecord(@RequestParam int id){
        return diaryService.getSingleDiaryRecord(id);
    }

    @PostMapping("/add")
    public ResponseEntity<Response<Diary>> saveNewDiaryRecord(@RequestBody Diary diary) {
        return diaryService.saveNewDiaryRecord(diary);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Response<Diary>> deleteDiaryRecord(@RequestParam int id) {
        return diaryService.deleteDiaryRecord(id);
    }
}