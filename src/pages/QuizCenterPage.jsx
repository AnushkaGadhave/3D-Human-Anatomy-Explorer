import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  HelpCircle,
  Award,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Trophy,
  Brain,
  Box
} from 'lucide-react'
import { QUIZ_CATEGORIES, QUIZ_QUESTIONS } from '../data/quizQuestions'
import PageHeader from '../components/PageHeader'
import './QuizCenterPage.css'

export default function QuizCenterPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [isQuizStarted, setIsQuizStarted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState({}) // { [index]: selectedOptionIndex }
  const [isSubmitted, setIsSubmitted] = useState(false) // Final results view
  const [showAnswerFeedback, setShowAnswerFeedback] = useState(false)

  // Filtered question set based on chosen category
  const activeQuestions = useMemo(() => {
    if (selectedCategory === 'All Categories') return QUIZ_QUESTIONS
    return QUIZ_QUESTIONS.filter((q) => q.category === selectedCategory)
  }, [selectedCategory])

  const currentQ = activeQuestions[currentIndex] || activeQuestions[0]
  const isAnswered = userAnswers[currentIndex] !== undefined
  const selectedOption = userAnswers[currentIndex]

  // Handlers
  const handleStartQuiz = () => {
    setIsQuizStarted(true)
    setCurrentIndex(0)
    setUserAnswers({})
    setIsSubmitted(false)
    setShowAnswerFeedback(false)
  }

  const handleSelectOption = (idx) => {
    if (showAnswerFeedback) return // locked once answered
    setUserAnswers((prev) => ({ ...prev, [currentIndex]: idx }))
    setShowAnswerFeedback(true)
  }

  const handleNextQuestion = () => {
    setShowAnswerFeedback(false)
    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1)
      if (userAnswers[currentIndex + 1] !== undefined) {
        setShowAnswerFeedback(true)
      }
    } else {
      setIsSubmitted(true)
    }
  }

  const handlePrevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
      setShowAnswerFeedback(userAnswers[currentIndex - 1] !== undefined)
    }
  }

  const handleRestart = () => {
    setIsQuizStarted(false)
    setCurrentIndex(0)
    setUserAnswers({})
    setIsSubmitted(false)
    setShowAnswerFeedback(false)
  }

  // Scoring
  const totalQuestions = activeQuestions.length
  const correctCount = Object.entries(userAnswers).reduce((count, [idx, ans]) => {
    const q = activeQuestions[Number(idx)]
    return count + (q && q.correctAnswer === ans ? 1 : 0)
  }, 0)

  const scorePercentage = Math.round((correctCount / totalQuestions) * 100) || 0

  const getScoreBadge = () => {
    if (scorePercentage >= 90) return { label: 'Master Anatomist', color: '#10b981', icon: Trophy }
    if (scorePercentage >= 70) return { label: 'Physiology Scholar', color: '#0284c7', icon: Award }
    if (scorePercentage >= 50) return { label: 'Apprentice Explorer', color: '#f59e0b', icon: Brain }
    return { label: 'Keep Practicing', color: '#8b5cf6', icon: Sparkles }
  }

  const badgeInfo = getScoreBadge()
  const BadgeIcon = badgeInfo.icon

  return (
    <div className="quiz-center-page">
      <div className="quiz-center-inner container">
        {/* Page Header */}
        <PageHeader
          badge="Interactive Knowledge Test"
          title="Anatomy Quiz Center"
          subtitle="Test your comprehension of human anatomy, organ physiology, skeletal mechanics, and biological networks with instant feedback."
          breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Quiz Center' }]}
        />

        {/* STATE 1: Start Screen */}
        {!isQuizStarted && !isSubmitted && (
          <div className="quiz-start-card">
            <div className="start-icon-banner">
              <Brain size={48} className="start-banner-icon" />
            </div>

            <div className="start-card-body">
              <h2 className="start-heading">Choose Your Quiz Category</h2>
              <p className="start-desc">
                Select a specific physiological category or test your knowledge across the entire curriculum.
              </p>

              {/* Category selector pills */}
              <div className="quiz-category-grid">
                {QUIZ_CATEGORIES.map((cat) => {
                  const count =
                    cat === 'All Categories'
                      ? QUIZ_QUESTIONS.length
                      : QUIZ_QUESTIONS.filter((q) => q.category === cat).length
                  const isSelected = selectedCategory === cat

                  return (
                    <button
                      key={cat}
                      type="button"
                      className={`quiz-category-select-btn ${isSelected ? 'selected' : ''}`}
                      onClick={() => setSelectedCategory(cat)}
                    >
                      <span className="cat-btn-name">{cat}</span>
                      <span className="cat-btn-count">{count} Questions</span>
                    </button>
                  )
                })}
              </div>

              {/* Start Action */}
              <div className="start-action-row">
                <button
                  type="button"
                  className="btn-launch-quiz"
                  onClick={handleStartQuiz}
                >
                  <span>Start Quiz &bull; {activeQuestions.length} Questions</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STATE 2: Active Question Screen */}
        {isQuizStarted && !isSubmitted && currentQ && (
          <div className="quiz-active-card">
            {/* Quiz Progress Bar & Header */}
            <div className="quiz-header-bar">
              <div className="quiz-meta-info">
                <span className="quiz-active-category">{currentQ.category}</span>
                <span className="quiz-progress-text">
                  Question <strong>{currentIndex + 1}</strong> of {totalQuestions}
                </span>
              </div>

              <div className="quiz-progress-track">
                <div
                  className="quiz-progress-fill"
                  style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Text */}
            <div className="quiz-question-box">
              <h2 className="quiz-question-title">{currentQ.question}</h2>
            </div>

            {/* Answer Options */}
            <div className="quiz-options-list">
              {currentQ.options.map((option, optIdx) => {
                const isCurrentSelected = selectedOption === optIdx
                const isCorrect = currentQ.correctAnswer === optIdx
                let optionClass = 'quiz-option-btn'

                if (showAnswerFeedback) {
                  if (isCorrect) optionClass += ' correct'
                  else if (isCurrentSelected) optionClass += ' incorrect'
                  else optionClass += ' disabled'
                } else if (isCurrentSelected) {
                  optionClass += ' selected'
                }

                return (
                  <button
                    key={optIdx}
                    type="button"
                    className={optionClass}
                    onClick={() => handleSelectOption(optIdx)}
                    disabled={showAnswerFeedback}
                  >
                    <span className="option-letter">
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span className="option-text">{option}</span>
                    {showAnswerFeedback && isCorrect && (
                      <CheckCircle2 size={18} className="feedback-icon correct" />
                    )}
                    {showAnswerFeedback && isCurrentSelected && !isCorrect && (
                      <XCircle size={18} className="feedback-icon incorrect" />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Instant Answer Feedback & Explanation */}
            {showAnswerFeedback && (
              <div
                className={`feedback-explanation-box ${
                  selectedOption === currentQ.correctAnswer ? 'success' : 'wrong'
                }`}
              >
                <div className="feedback-title-row">
                  {selectedOption === currentQ.correctAnswer ? (
                    <>
                      <CheckCircle2 size={18} />
                      <strong>Correct! Excellent understanding.</strong>
                    </>
                  ) : (
                    <>
                      <XCircle size={18} />
                      <strong>
                        Incorrect. The correct answer was: {currentQ.options[currentQ.correctAnswer]}
                      </strong>
                    </>
                  )}
                </div>
                <p className="feedback-explanation-text">{currentQ.explanation}</p>
              </div>
            )}

            {/* Navigation Footer */}
            <div className="quiz-nav-footer">
              <button
                type="button"
                className="btn-quiz-prev"
                onClick={handlePrevQuestion}
                disabled={currentIndex === 0}
              >
                <ArrowLeft size={16} />
                <span>Previous</span>
              </button>

              <button
                type="button"
                className="btn-quiz-next"
                onClick={handleNextQuestion}
                disabled={!isAnswered}
              >
                <span>{currentIndex === totalQuestions - 1 ? 'Finish & View Score' : 'Next Question'}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* STATE 3: Final Results Screen */}
        {isSubmitted && (
          <div className="quiz-results-card">
            <div className="results-badge-header" style={{ backgroundColor: `${badgeInfo.color}15` }}>
              <BadgeIcon size={56} style={{ color: badgeInfo.color }} />
              <span className="results-badge-title" style={{ color: badgeInfo.color }}>
                {badgeInfo.label}
              </span>
              <h2 className="results-score-heading">
                You scored {correctCount} out of {totalQuestions} ({scorePercentage}%)
              </h2>
            </div>

            {/* Score Summary Metrics */}
            <div className="results-metrics-grid">
              <div className="metric-box">
                <span className="metric-label">Total Questions</span>
                <span className="metric-val">{totalQuestions}</span>
              </div>
              <div className="metric-box correct">
                <span className="metric-label">Correct Answers</span>
                <span className="metric-val">{correctCount}</span>
              </div>
              <div className="metric-box incorrect">
                <span className="metric-label">Review Needed</span>
                <span className="metric-val">{totalQuestions - correctCount}</span>
              </div>
            </div>

            {/* Detailed Review Section */}
            <div className="results-review-section">
              <h3 className="review-heading">Answer Review & Explanations</h3>
              <div className="review-list">
                {activeQuestions.map((q, idx) => {
                  const userAns = userAnswers[idx]
                  const wasCorrect = userAns === q.correctAnswer

                  return (
                    <div
                      key={q.id}
                      className={`review-item ${wasCorrect ? 'item-correct' : 'item-incorrect'}`}
                    >
                      <div className="review-item-header">
                        <span className="review-q-number">Question {idx + 1}</span>
                        <span className={`review-status-tag ${wasCorrect ? 'correct' : 'incorrect'}`}>
                          {wasCorrect ? 'Correct' : 'Needs Review'}
                        </span>
                      </div>
                      <p className="review-q-text">{q.question}</p>
                      <div className="review-answers-comparison">
                        <div className="ans-row">
                          <span className="ans-label">Your Answer:</span>
                          <span className={`ans-val ${wasCorrect ? 'correct' : 'incorrect'}`}>
                            {userAns !== undefined ? q.options[userAns] : 'Not answered'}
                          </span>
                        </div>
                        {!wasCorrect && (
                          <div className="ans-row">
                            <span className="ans-label">Correct Answer:</span>
                            <span className="ans-val correct">
                              {q.options[q.correctAnswer]}
                            </span>
                          </div>
                        )}
                      </div>
                      <p className="review-explanation">{q.explanation}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Final Actions */}
            <div className="results-actions-row">
              <button
                type="button"
                className="btn-retry-quiz"
                onClick={handleRestart}
              >
                <RotateCcw size={16} />
                <span>Retry Quiz</span>
              </button>

              <Link to="/learn" className="btn-results-link">
                <HelpCircle size={16} />
                <span>Review Learning Hub</span>
              </Link>

              <Link to="/dashboard" className="btn-results-link primary">
                <Box size={16} />
                <span>Explore 3D Models</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
