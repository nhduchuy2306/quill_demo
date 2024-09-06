export const TEMPLATES = {
    sprintPlanning: {
        name: "Sprint Planning",
        content: `<h2>Sprint Goals</h2>
                  <ul>
                    <li>Goal 1: [Describe goal]</li>
                    <li>Goal 2: [Describe goal]</li>
                  </ul>
                  <h2>Planned Tasks</h2>
                  <table>
                    <tr>
                      <th>Task</th>
                      <th>Assignee</th>
                      <th>Estimate</th>
                    </tr>
                    <tr>
                      <td>[Task 1]</td>
                      <td>[Assignee]</td>
                      <td>[Estimate]</td>
                    </tr>
                    <tr>
                      <td>[Task 2]</td>
                      <td>[Assignee]</td>
                      <td>[Estimate]</td>
                    </tr>
                  </table>`
    },
    technicalDiscussion: {
        name: "Technical Discussion",
        content: `<h1>Technical Discussion</h1>
                  <h2>Topic</h2>
                  <p>[Describe the technical topic or issue]</p>
                  <h2>Proposed Solutions</h2>
                  <ol>
                    <li>Solution 1: [Describe solution]</li>
                    <li>Solution 2: [Describe solution]</li>
                  </ol>
                  <h2>Decision</h2>
                  <p>[Document the final decision]</p>`
    },
    meetingNotes: {
        name: "Meeting Notes",
        content: `<h1>Meeting Notes</h1>
                  <h2>Date</h2>
                  <p>[Date]</p>
                  <h2>Attendees</h2>
                  <ul>
                    <li>[Name 1]</li>
                    <li>[Name 2]</li>
                  </ul>
                  <h2>Agenda</h2>
                  <ol>
                    <li>Topic 1: [Discussion]</li>
                    <li>Topic 2: [Discussion]</li>
                  </ol>
                  <h2>Action Items</h2>
                  <ul>
                    <li>[Action 1]</li>
                    <li>[Action 2]</li>
                  </ul>`
    },
    sprintRetrospective: {
        name: "Sprint Retrospective",
        content: `<p>Sprint Retrospective</p>
                  <p>What Went Well</p>
                  <ul>
                    <li>[Item 1]</li>
                    <li>[Item 2]</li>
                  </ul>
                  <p>What Didn't Go Well</p>
                  <ul>
                    <li>[Item 1]</li>
                    <li>[Item 2]</li>
                  </ul>
                  <p>Action Items</p>
                  <ul>
                    <li>[Action 1]</li>
                    <li>[Action 2]</li>
                  </ul>`
    },
    designReview: {
        name: "Design Review",
        content: `<h1>Design Review</h1>
                  <h2>Design Overview</h2>
                  <p>[Describe the design]</p>
                  <h2>Key Components</h2>
                  <ul>
                    <li>Component 1: [Details]</li>
                    <li>Component 2: [Details]</li>
                  </ul>
                  <h2>Feedback</h2>
                  <ul>
                    <li>[Feedback 1]</li>
                    <li>[Feedback 2]</li>
                  </ul>
                  <h2>Next Steps</h2>
                  <p>[Describe the next steps]</p>`
    },
    codeReviewChecklist: {
        name: "Code Review Checklist",
        content: `<h1>Code Review Checklist</h1>
                  <ul>
                    <li>Code readability and style</li>
                    <li>Correctness of implementation</li>
                    <li>Edge cases handled</li>
                    <li>Tests included</li>
                    <li>Performance considerations</li>
                    <li>Security concerns</li>
                  </ul>
                  <h2>Reviewer Notes</h2>
                  <p>[Notes from the reviewer]</p>`
    },
    releasePlanning: {
        name: "Release Planning",
        content: `<h1>Release Planning</h1>
                  <h2>Release Version</h2>
                  <p>[Version Number]</p>
                  <h2>Target Date</h2>
                  <p>[Date]</p>
                  <h2>Included Features</h2>
                  <ul>
                    <li>[Feature 1]</li>
                    <li>[Feature 2]</li>
                  </ul>
                  <h2>Risks and Mitigation</h2>
                  <ul>
                    <li>Risk 1: [Description]</li>
                    <li>Risk 2: [Description]</li>
                  </ul>
                  <h2>Release Checklist</h2>
                  <ul>
                    <li>[Task 1]</li>
                    <li>[Task 2]</li>
                  </ul>`
    },
    architectureDecisionRecord: {
        name: "Architecture Decision Record",
        content: `<h1>Architecture Decision Record</h1>
                  <h2>Title</h2>
                  <p>[Decision Title]</p>
                  <h2>Date</h2>
                  <p>[Date]</p>
                  <h2>Context</h2>
                  <p>[Explain the context and background]</p>
                  <h2>Decision</h2>
                  <p>[Detail the decision made]</p>
                  <h2>Consequences</h2>
                  <p>[Discuss the consequences of this decision]</p>`
    },
    incidentReport: {
        name: "Incident Report",
        content: `<h1>Incident Report</h1>
                  <h2>Date of Incident</h2>
                  <p>[Date]</p>
                  <h2>Summary</h2>
                  <p>[Brief summary of the incident]</p>
                  <h2>Root Cause Analysis</h2>
                  <p>[Details of what caused the incident]</p>
                  <h2>Resolution</h2>
                  <p>[How the issue was resolved]</p>
                  <h2>Preventative Measures</h2>
                  <ul>
                    <li>[Measure 1]</li>
                    <li>[Measure 2]</li>
                  </ul>`
    },
    dailyStandup: {
        name: "Daily Standup",
        content: `<h1>Daily Standup</h1>
                  <h2>Date</h2>
                  <p>[Date]</p>
                  <h2>What did you do yesterday?</h2>
                  <ul>
                    <li>[Task 1]</li>
                    <li>[Task 2]</li>
                  </ul>
                  <h2>What will you do today?</h2>
                  <ul>
                    <li>[Task 1]</li>
                    <li>[Task 2]</li>
                  </ul>
                  <h2>Any blockers?</h2>
                  <ul>
                    <li>[Blocker 1]</li>
                    <li>[Blocker 2]</li>
                  </ul>`
    }
};
