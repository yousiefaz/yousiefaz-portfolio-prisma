"use client";

import {
  ElementType,
  useEffect,
  useRef,
  useState,
  createElement,
  useMemo,
  useCallback,
} from "react";

import { gsap } from "gsap";

interface TypingTextProps {
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string | React.ReactNode;
  cursorBlinkDuration?: number;
  cursorClassName?: string;
  text: string | string[];
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  textColors?: string[];
  variableSpeed?: { min: number; max: number };
  onSentenceComplete?: (sentence: string, index: number) => void;
  startOnVisible?: boolean;
  reverseMode?: boolean;
}

const TypingText = ({
  text,
  as: Component = "div",
  typingSpeed = 30,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 50,
  loop = true,
  className = "",
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName = "",
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  ...props
}: TypingTextProps & React.HTMLAttributes<HTMLElement>) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);

  const cursorRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  // stable text array
  const textArray = useMemo(
    () => (Array.isArray(text) ? text : [text]),
    [text],
  );

  // random speed helper
  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  }, [variableSpeed, typingSpeed]);

  const getCurrentTextColor = useCallback(() => {
    if (textColors.length === 0) return "currentColor";
    return textColors[currentTextIndex % textColors.length];
  }, [textColors, currentTextIndex]);

  // visibility observer (safe SSR init)
  useEffect(() => {
    if (!startOnVisible) {
      setIsVisible(true);
      return;
    }

    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [startOnVisible]);

  // cursor blink animation (GSAP safe cleanup)
  useEffect(() => {
    if (!showCursor || !cursorRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: cursorBlinkDuration,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    });

    return () => ctx.revert();
  }, [showCursor, cursorBlinkDuration]);

  // typing logic
  useEffect(() => {
    if (!isVisible) return;

    let timeout: ReturnType<typeof setTimeout>;

    const currentText = textArray[currentTextIndex] ?? "";
    const processedText = reverseMode
      ? currentText.split("").reverse().join("")
      : currentText;

    const run = () => {
      // DELETE MODE
      if (isDeleting) {
        if (displayedText.length === 0) {
          setIsDeleting(false);

          if (onSentenceComplete) {
            onSentenceComplete(currentText, currentTextIndex);
          }

          if (currentTextIndex === textArray.length - 1 && !loop) return;

          setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
          setCurrentCharIndex(0);

          timeout = setTimeout(() => {}, pauseDuration);
          return;
        }

        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
        }, deletingSpeed);

        return;
      }

      // TYPE MODE
      if (currentCharIndex < processedText.length) {
        timeout = setTimeout(
          () => {
            setDisplayedText((prev) => prev + processedText[currentCharIndex]);
            setCurrentCharIndex((prev) => prev + 1);
          },
          variableSpeed ? getRandomSpeed() : typingSpeed,
        );
      } else {
        if (textArray.length > 1 || loop) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    };

    if (currentCharIndex === 0 && displayedText === "") {
      timeout = setTimeout(run, initialDelay);
    } else {
      run();
    }

    return () => clearTimeout(timeout);
  }, [
    isVisible,
    displayedText,
    currentCharIndex,
    isDeleting,
    currentTextIndex,
    textArray,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    loop,
    initialDelay,
    reverseMode,
    variableSpeed,
    getRandomSpeed,
    onSentenceComplete,
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping &&
    (currentCharIndex < (textArray[currentTextIndex]?.length ?? 0) ||
      isDeleting);

  return createElement(
    Component,
    {
      ref: containerRef,
      className: `inline-block whitespace-pre-wrap tracking-tight ${className}`,
      ...props,
    },
    <>
      <span style={{ color: getCurrentTextColor() }}>{displayedText}</span>

      {showCursor && (
        <span
          ref={cursorRef}
          className={`inline-block ${
            shouldHideCursor ? "opacity-0" : "opacity-100"
          } ${
            cursorCharacter === "|"
              ? `w-[1px] h-5 bg-foreground translate-y-1 ${cursorClassName}`
              : `ml-1 ${cursorClassName}`
          }`}
        >
          {cursorCharacter !== "|" ? cursorCharacter : ""}
        </span>
      )}
    </>,
  );
};

export default TypingText;
