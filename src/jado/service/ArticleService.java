package jado.service;

import java.util.List;

import jado.dao.ArticleDao;
import jado.dao.BoardDao;
import jado.model.Article;
import jado.model.Board;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import core.exception.ForignKeyException;

@Service
public class ArticleService {
	@Autowired private ArticleDao articleDao;
	@Autowired private BoardDao boardDao;

	public void insertArticle(Article article) throws ForignKeyException {
		Board board = boardDao.selectByPk(article.getBoardId());
		if (board == null) {
			throw new ForignKeyException("잘못된 경로로 접근하셨습니다.");
		}
		articleDao.insert(article);
	}

	public List<Article> getArticles(int boardId) {
		return articleDao.selectAllByBoard(boardId);
	}

	public Board getBoard(int boardId) {
		return boardDao.selectByPk(boardId);
	}
	
}
