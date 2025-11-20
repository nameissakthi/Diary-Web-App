package com.sakthivel.mydiary.repository;

import com.sakthivel.mydiary.model.Diary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DiaryRepository extends JpaRepository<Diary, Integer> {
    List<Diary> getAllByEmail(String email);

    void deleteAllByEmail(String email);

    List<Diary> findAllByEmail(String email);
}