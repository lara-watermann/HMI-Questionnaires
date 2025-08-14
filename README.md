# Human Machine Interaction Questionnaire Application

A website listing most common human machine interaction questionnaires
for filtering, sorting and assessing questionnaires for your needs.

## Contributing

We welcome contributions to this project! If you have suggestions for
improvements or new features, please open an issue or submit a pull request.

In case a questionnaire is missing, feel free to open a pull request with the
details.  The following code block provides a skeleton to add to the
[`src/questionnaires.ts`](./src/questionnaires.ts) file:

```json
{
  "name": "",
  "short": "",
  "metadata": {
    "scales": [
      {
        "name": "",
        "cronbachsAlpha": null
      }
    ],
    "responseFormat": null,
    "time": [],
    "language": [],
    "year": null,
    "items": null,
    "participantDetails": {
      "n": 0,
      "type": []
    }
  },
  "links": {},
  "domain": [],
  "notes": []
}
```
