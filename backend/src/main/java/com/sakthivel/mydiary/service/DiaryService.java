package com.sakthivel.mydiary.service;

import com.sakthivel.mydiary.dto.Response;
import com.sakthivel.mydiary.model.Diary;
import com.sakthivel.mydiary.repository.DiaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DiaryService {

    private DiaryRepository diaryRepository;

    public DiaryService(@Autowired DiaryRepository diaryRepository) {
        this.diaryRepository = diaryRepository;
    }

    public ResponseEntity<Response<List<Diary>>> getAllRecordsByEmail(String email) {
        List<Diary> diaryList;
        try{
            diaryList = new ArrayList<>(diaryRepository.getAllByEmail(email));
            if(diaryList.isEmpty())
                return new ResponseEntity<>(new Response<>("User has no records"), HttpStatus.NOT_FOUND);
            return new ResponseEntity<>(new Response<>(diaryList), HttpStatus.OK);
        } catch (Exception e) {
            System.out.print(e.getMessage());
            return new ResponseEntity<>(new Response<>(e.getMessage()), HttpStatus.CONFLICT);
        }
    }

    public ResponseEntity<Response<Diary>> getSingleDiaryRecord(int id) {
        Diary diary;
        try{
            diary = diaryRepository.findById(id).orElse(null);
            if(diary==null)
                return new ResponseEntity<>(new Response<>("Record Not Found"), HttpStatus.NOT_FOUND);
            return new ResponseEntity<>(new Response<>(diary), HttpStatus.FOUND);
        } catch (Exception e) {
            System.out.print(e.getMessage());
            return new ResponseEntity<>(new Response<>(e.getMessage()), HttpStatus.CONFLICT);
        }
    }

    public ResponseEntity<Response<Diary>> saveNewDiaryRecord(Diary diary){
        try {
            diaryRepository.save(diary);
            return new ResponseEntity<>(new Response<>(true, "Data Stored Successfully"), HttpStatus.CREATED);
        } catch (Exception e) {
            System.out.print(e.getMessage());
            return new ResponseEntity<>(new Response<>(false, e.getMessage()), HttpStatus.CONFLICT);
        }
    }

    public ResponseEntity<Response<Diary>> deleteDiaryRecord(int id) {
        try {
            diaryRepository.deleteById(id);
            return new ResponseEntity<>(new Response<>(true, "Record Deleted Successfully"), HttpStatus.OK);
        } catch (Exception e) {
            System.out.print(e.getMessage());
            return new ResponseEntity<>(new Response<>(e.getMessage()), HttpStatus.CONFLICT);
        }
    }
}