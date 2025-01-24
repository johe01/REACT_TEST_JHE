package com.aloha.board.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.aloha.board.domain.Boards;

@Mapper
public interface BoardMapper extends BaseMapper<Boards> {
    public List<Boards> listWithThumbnail();
}