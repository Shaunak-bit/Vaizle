# Daily Values Aggregator

A JavaScript solution that aggregates daily values by weekday and handles missing days by calculating averages.

## Problem Statement

Given a dictionary `D` where:
- Keys are dates in `YYYY-MM-DD` format
- Values are integers

Return a new dictionary where:
1. Keys are weekday names (`Mon`, `Tue`, etc.)
2. Values are sums of all values for that weekday
3. Missing days are filled with the average of previous and next available days

## Solution Features

- Handles consecutive missing days correctly
- Maintains day order (Mon-Sun)
- Works with negative values
- Passes all specified test cases

  ### Output

- testCompleteWeek passed
- testMissingDays passed
- testSingleDay passed
- testNegativeValues passed

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/daily-values-aggregator.git
