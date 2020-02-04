SELECT COUNT(assistance_requests.*) as total_assistances, name
FROM assistance_requests JOIN students ON students.id = student_id
WHERE name = 'Elliot Dickinson'
GROUP BY name;