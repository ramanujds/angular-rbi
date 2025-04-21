package com.rbi.mytaskmanager.repository;


import com.rbi.mytaskmanager.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, String> {


}
