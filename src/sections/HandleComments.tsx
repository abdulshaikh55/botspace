import React, { useState } from 'react'
import { Box, Typography, RadioGroup, Radio, FormControlLabel, TextField, Chip } from '@mui/material';

interface HandleCommentsProps {
  onSpecificWordsChange: (words: string[]) => void;
}

const HandleComments = ({ onSpecificWordsChange }: HandleCommentsProps) => {
  const [commentFilterValue, setCommentFilterValue] = useState('specific_words');
  const [specificWordsInput, setSpecificWordsInput] = useState('');


  const [currentSpecificWords, setCurrentSpecificWords] = useState<string[]>([]);

  const handleCommentFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentFilterValue(event.target.value);
    if (event.target.value === 'any_word') {
      setCurrentSpecificWords([]);
      onSpecificWordsChange([]);
    } else {
      const words = specificWordsInput.split(',').map(word => word.trim()).filter(word => word.length > 0);
      setCurrentSpecificWords(words);
      onSpecificWordsChange(words);
    }
  }

  const handleSpecificWordsInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setSpecificWordsInput(inputValue);
    const words = inputValue.split(',').map(word => word.trim()).filter(word => word.length > 0);
    setCurrentSpecificWords(words);
    onSpecificWordsChange(words); // Send updates to parent in real-time
  };

  const handleChipClick = (word: string) => {
    const newWords = specificWordsInput ? `${specificWordsInput}, ${word}` : word;
    setSpecificWordsInput(newWords);
    const words = newWords.split(',').map(item => item.trim()).filter(item => item.length > 0);
    setCurrentSpecificWords(words);
    onSpecificWordsChange(words); // Send updates to parent
  }

  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      <Typography sx={{ mb: 2 }} variant='h5' fontWeight={600} color="text.primary">And this comment has</Typography>

      <RadioGroup
        aria-label="comment-content-options"
        name="comment-content-group"
        value={commentFilterValue}
        onChange={handleCommentFilterChange}
        sx={{ width: '100%' }}
      >
        {/* Option 1: A specific word or words */}
        <FormControlLabel
          value="specific_words"
          control={<Radio size="small" />}
          label={
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <Typography variant="body1" color="text.primary">a specific word or words</Typography>
              {commentFilterValue === 'specific_words' && (
                <Box sx={{ mt: 1, width: '100%' }}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Price, Link, Shop" // Updated placeholder for clarity
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
                    {['Price', 'Link', 'Shop'].map((word) => (
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

        {/* Option 2: Any word */}
        <FormControlLabel
          value="any_word"
          control={<Radio size="small" />}
          label={
            <Typography variant="body1" color="text.primary">any word</Typography>
          }
          sx={{
            width: '100%',
          }}
        />
      </RadioGroup>
    </Box>
  )
}

export default HandleComments;