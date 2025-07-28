import React, { useState, useEffect } from 'react';
import { Box, Typography, RadioGroup, Radio, FormControlLabel, TextField, Chip } from '@mui/material';

interface HandleCommentsProps {
  onSpecificWordsChange: (words: string[]) => void;
}

const SUGGESTED_WORDS = ['Price', 'Link', 'Shop'];

const HandleComments = ({ onSpecificWordsChange }: HandleCommentsProps) => {
  const [commentFilterValue, setCommentFilterValue] = useState('specific_words');
  const [specificWordsInput, setSpecificWordsInput] = useState('');
  const [currentSpecificWords, setCurrentSpecificWords] = useState<string[]>([]);

  const handleCommentFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCommentFilterValue(value);
    if (value === 'any_word') {
      setSpecificWordsInput('');
      setCurrentSpecificWords([]);
      onSpecificWordsChange([]);
    } else {
      // When switching back from "any_word" to "specific_words" no need to do anything special,
      // the effect will handle input processing.
    }
  };

  useEffect(() => {
    if (commentFilterValue === 'specific_words') {
      const words = specificWordsInput
        .split(',')
        .map(word => word.trim())
        .filter(word => word.length > 0);

      setCurrentSpecificWords(words);
      onSpecificWordsChange(words);
    }
    // else do nothing if any_word selected
  }, [specificWordsInput, commentFilterValue, onSpecificWordsChange]);

  const handleSpecificWordsInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpecificWordsInput(event.target.value);
  };

  const handleChipClick = (word: string) => {
    const wordsSet = new Set(
      specificWordsInput
        .split(',')
        .map(w => w.trim())
        .filter(w => w.length > 0)
    );
    wordsSet.add(word);

    const newInput = Array.from(wordsSet).join(', ');
    setSpecificWordsInput(newInput);
  };

  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      <Typography sx={{ mb: 2 }} variant="h5" fontWeight={600} color="text.primary">
        And this comment has
      </Typography>

      <RadioGroup
        aria-label="comment-content-options"
        name="comment-content-group"
        value={commentFilterValue}
        onChange={handleCommentFilterChange}
        sx={{ width: '100%' }}
      >
        <FormControlLabel
          value="specific_words"
          control={<Radio size="small" />}
          label={
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <Typography variant="body1" color="text.primary">
                a specific word or words
              </Typography>
              {commentFilterValue === 'specific_words' && (
                <Box sx={{ mt: 1, width: '100%' }}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Price, Link, Shop"
                    value={specificWordsInput}
                    onChange={handleSpecificWordsInputChange}
                    sx={{ mb: 1 }}
                    InputProps={{
                      sx: {
                        color: 'text.primary',
                        '& fieldset': { borderColor: 'divider' },
                        '&:hover fieldset': { borderColor: 'text.secondary' },
                        '&.Mui-focused fieldset': { borderColor: 'primary.main' },
                      },
                    }}
                    InputLabelProps={{
                      sx: { color: 'text.secondary' },
                    }}
                  />
                  <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
                    Use commas to separate words
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {SUGGESTED_WORDS.map((word) => (
                      <Chip
                        key={word}
                        label={word}
                        variant="outlined"
                        onClick={() => handleChipClick(word)}
                        sx={{ cursor: 'pointer' }}
                      />
                    ))}
                  </Box>
                </Box>
              )}
            </Box>
          }
          sx={{
            alignItems: 'flex-start',
            width: '100%',
          }}
        />

        <FormControlLabel
          value="any_word"
          control={<Radio size="small" />}
          label={<Typography variant="body1" color="text.primary">any word</Typography>}
          sx={{ width: '100%' }}
        />
      </RadioGroup>
    </Box>
  );
};

export default HandleComments;
