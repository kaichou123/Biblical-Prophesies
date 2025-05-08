---
title: Evidence List
layout: default
---

# Evidence List

<table id="evidence-table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Type</th>
      <th>Category</th>
      <th>Description</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    {% for evidence in site.evidence %}
    <tr>
      <td>{{ evidence.id }}</td>
      <td>{{ evidence.title }}</td>
      <td>{{ evidence.type }}</td>
      <td>{{ evidence.category }}</td>
      <td>{{ evidence.description | truncate: 30 }}</td>
      <td><a href="{{ evidence.url }}">Details</a></td>
    </tr>
    {% endfor %}
  </tbody>
</table>


