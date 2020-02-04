SELECT assignments.id as id, assignments.name as name, assignments.day as day, assignments.chapter as chapter, count(assistance_requests.assignment_id) as total_requests
FROM assistance_requests JOIN assignments ON assignments.id = assistance_requests.assignment_id
GROUP BY assignments.id
ORDER BY total_requests DESC;