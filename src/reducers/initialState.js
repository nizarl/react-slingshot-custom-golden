export default {

  //let's try to flatten this structure as much as possible.  This will make reducer logic simpler and less nested;
  components: {
    byId: {
      1: {
        componentInfo: {
          "id": 1,
          "name": "clinicaldocs",
          "urlPath": "clinicaldocs/"
        },
        isOpened: true,
        clinicaldocsData: [{
            "identifier": "1",
            "type": "Lab Result",
            "description": "CBC",
            "dateOfService": "11/16/2016",
            "lastAnnotation": "A-Lorem ipsum dolor sit amet, nonumes vocibus volumus duo ei, fugit falli qui ex. Munere periculis ut ius. Eum cu etiam oporteat perpetua, audire molestie perpetua ex sed. Eu eos mucius postea eligendi, nec te omnis integre voluptatibus, quo soleat vocent ornatus ex. Pro ei choro persius, id magna comprehensam sea. No usu affert reprimique."
          },
          {
            "identifier": "2",
            "type": "Consultation",
            "description": "CARDIOLOGIST",
            "dateOfService": "10/16/2015",
            "lastAnnotation": "e-Lorem ipsum dolor sit amet, nonumes vocibus volumus duo ei, fugit falli qui ex. Munere periculis ut ius. Eum cu etiam oporteat perpetua, audire molestie perpetua ex sed. Eu eos mucius postea eligendi, nec te omnis integre voluptatibus, quo soleat vocent ornatus ex. Pro ei choro persius, id magna comprehensam sea. No usu affert reprimique."
          },
          {
            "identifier": "3",
            "type": "Progress Note",
            "description": "PCP",
            "dateOfService": "",
            "lastAnnotation": ""
          },
          {
            "identifier": "4",
            "type": "Progress Note",
            "description": "PCP",
            "dateOfService": "",
            "lastAnnotation": ""
          },
          {
            "identifier": "5",
            "type": "Progress Note",
            "description": "PCP",
            "dateOfService": "10/16/2015",
            "lastAnnotation": "c-Lorem ipsum dolor sit amet, nonumes vocibus volumus duo ei, fugit falli qui ex. Munere periculis ut ius. Eum cu etiam oporteat perpetua, audire molestie perpetua ex sed. Eu eos mucius postea eligendi, nec te omnis integre voluptatibus, quo soleat vocent ornatus ex. Pro ei choro persius, id magna comprehensam sea. No usu affert reprimique."
          },
          {
            "identifier": "6",
            "type": "Progress Note",
            "description": "PCP",
            "dateOfService": "09/16/2015",
            "lastAnnotation": ""
          },
          {
            "identifier": "7",
            "type": "Progress Note",
            "description": "PCP",
            "dateOfService": "01/16/2015",
            "lastAnnotation": ""
          },
          {
            "identifier": "8",
            "type": "Progress Note",
            "description": "PCP",
            "dateOfService": "02/16/2015",
            "lastAnnotation": ""
          },
          {
            "identifier": "9",
            "type": "Progress Note",
            "description": "PCP",
            "dateOfService": "02/16/2017",
            "lastAnnotation": ""
          }, {
            "identifier": "10",
            "type": "Progress Note",
            "description": "PCP",
            "dateOfService": "04/16/2015",
            "lastAnnotation": "B-Lorem ipsum dolor sit amet, nonumes vocibus volumus duo ei, fugit falli qui ex. Munere periculis ut ius. Eum cu etiam oporteat perpetua, audire molestie perpetua ex sed. Eu eos mucius postea eligendi, nec te omnis integre voluptatibus, quo soleat vocent ornatus ex. Pro ei choro persius, id magna comprehensam sea. No usu affert reprimique."
          },
          {
            "identifier": "11",
            "type": "Progress Note",
            "description": "PCP",
            "dateOfService": "05/16/2015",
            "lastAnnotation": "d-Lorem ipsum dolor sit amet, nonumes vocibus volumus duo ei, fugit falli qui ex. Munere periculis ut ius. Eum cu etiam oporteat perpetua, audire molestie perpetua ex sed. Eu eos mucius postea eligendi, nec te omnis integre voluptatibus, quo soleat vocent ornatus ex. Pro ei choro persius, id magna comprehensam sea. No usu affert reprimique."
          }
        ]
      },
      2: {
        componentInfo: {
          "id": 2,
          "name": "problems",
          "urlPath": "problems/"
        },
        isOpened: true,
        problems: [{
            "identifier": "1",
            "type": "Lab Result",
            "description": "CBC",
            "dateOfService": "11/16/2016",
            "lastAnnotation": "A-Lorem ipsum dolor sit amet, nonumes vocibus volumus duo ei, fugit falli qui ex. Munere periculis ut ius. Eum cu etiam oporteat perpetua, audire molestie perpetua ex sed. Eu eos mucius postea eligendi, nec te omnis integre voluptatibus, quo soleat vocent ornatus ex. Pro ei choro persius, id magna comprehensam sea. No usu affert reprimique."
          },
          {
            "identifier": "2",
            "type": "Consultation",
            "description": "CARDIOLOGIST",
            "dateOfService": "10/16/2015",
            "lastAnnotation": "e-Lorem ipsum dolor sit amet, nonumes vocibus volumus duo ei, fugit falli qui ex. Munere periculis ut ius. Eum cu etiam oporteat perpetua, audire molestie perpetua ex sed. Eu eos mucius postea eligendi, nec te omnis integre voluptatibus, quo soleat vocent ornatus ex. Pro ei choro persius, id magna comprehensam sea. No usu affert reprimique."
          },
          {
            "identifier": "3",
            "type": "Progress Note",
            "description": "PCP",
            "dateOfService": "",
            "lastAnnotation": ""
          },
          {
            "identifier": "4",
            "type": "Progress Note",
            "description": "PCP",
            "dateOfService": "",
            "lastAnnotation": ""
          },
          {
            "identifier": "5",
            "type": "Progress Note",
            "description": "PCP",
            "dateOfService": "10/16/2015",
            "lastAnnotation": "c-Lorem ipsum dolor sit amet, nonumes vocibus volumus duo ei, fugit falli qui ex. Munere periculis ut ius. Eum cu etiam oporteat perpetua, audire molestie perpetua ex sed. Eu eos mucius postea eligendi, nec te omnis integre voluptatibus, quo soleat vocent ornatus ex. Pro ei choro persius, id magna comprehensam sea. No usu affert reprimique."
          },
          {
            "identifier": "6",
            "type": "Progress Note",
            "description": "PCP",
            "dateOfService": "09/16/2015",
            "lastAnnotation": ""
          },
          {
            "identifier": "7",
            "type": "Progress Note",
            "description": "PCP",
            "dateOfService": "01/16/2015",
            "lastAnnotation": ""
          },
          {
            "identifier": "8",
            "type": "Progress Note",
            "description": "PCP",
            "dateOfService": "02/16/2015",
            "lastAnnotation": ""
          },
          {
            "identifier": "9",
            "type": "Progress Note",
            "description": "PCP",
            "dateOfService": "02/16/2017",
            "lastAnnotation": ""
          }, {
            "identifier": "10",
            "type": "Progress Note",
            "description": "PCP",
            "dateOfService": "04/16/2015",
            "lastAnnotation": "B-Lorem ipsum dolor sit amet, nonumes vocibus volumus duo ei, fugit falli qui ex. Munere periculis ut ius. Eum cu etiam oporteat perpetua, audire molestie perpetua ex sed. Eu eos mucius postea eligendi, nec te omnis integre voluptatibus, quo soleat vocent ornatus ex. Pro ei choro persius, id magna comprehensam sea. No usu affert reprimique."
          },
          {
            "identifier": "11",
            "type": "Progress Note",
            "description": "PCP",
            "dateOfService": "05/16/2015",
            "lastAnnotation": "d-Lorem ipsum dolor sit amet, nonumes vocibus volumus duo ei, fugit falli qui ex. Munere periculis ut ius. Eum cu etiam oporteat perpetua, audire molestie perpetua ex sed. Eu eos mucius postea eligendi, nec te omnis integre voluptatibus, quo soleat vocent ornatus ex. Pro ei choro persius, id magna comprehensam sea. No usu affert reprimique."
          }
        ]
      }
    },
    allIds: [1, 2]
  }
};
