import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

export default function TestPanel() {
  const testContent = [
    {
      id: '1',
      question:
        'Fusce aliquet condimentum fermentum. Donec condimentum ipsum porttitor sem lobortis malesuada. Cras vitae enim sed velit malesuada interdum eu quis diam. Nam vehicula sapien ac justo pulvinar fermentum. Nunc eu libero lacinia leo volutpat rhoncus non venenatis nisi. Proin fermentum finibus libero, ut finibus nisl mattis ac. Nunc ornare mi quis leo rutrum posuere. Nullam volutpat enim purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      options: [
        {
          id: '5',
          content:
            'Vivamus a interdum turpis. Nam consectetur orci id sem volutpat mollis. Sed efficitur leo dolor, eu auctor ipsum interdum scelerisque. Maecenas in lacinia ipsum, nec faucibus massa. Donec convallis elit id dolor mattis lacinia. Etiam vitae sem tortor. Proin eget sem nec turpis imperdiet hendrerit nec sed libero. Sed vitae massa eget elit egestas rutrum non id neque. Phasellus dictum, augue sed bibendum viverra, quam lacus porttitor ligula, nec congue nunc neque eget orci. Mauris efficitur nunc ac lectus porta, eu tincidunt felis pretium. Duis blandit tempor rutrum. Vivamus feugiat lobortis lacus. Proin in consequat dolor.',
        },
        {
          id: '6',
          content: 'the correlations',
        },
        {
          id: '7',
          content: 'the force',
        },

        {
          id: '8',
          content: 'none of the above are correct',
        },
      ],
    },
    {
      id: '2',
      question: 'Which one is correct',
      options: [
        {
          id: '9',
          content: 'the collection',
        },
        {
          id: '10',
          content: 'the correlations',
        },
        {
          id: '11',
          content: 'the force',
        },

        {
          id: '12',
          content: 'none of the above are correct',
        },
      ],
    },
    {
      id: '3',
      question:
        'Fusce aliquet condimentum fermentum. Donec condimentum ipsum porttitor sem lobortis malesuada. Cras vitae enim sed velit malesuada interdum eu quis diam. Nam vehicula sapien ac justo pulvinar fermentum. Nunc eu libero lacinia leo volutpat rhoncus non venenatis nisi. Proin fermentum finibus libero, ut finibus nisl mattis ac. Nunc ornare mi quis leo rutrum posuere. Nullam volutpat enim purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      options: [
        {
          id: '13',
          content:
            'Vivamus a interdum turpis. Nam consectetur orci id sem volutpat mollis. Sed efficitur leo dolor, eu auctor ipsum interdum scelerisque. Maecenas in lacinia ipsum, nec faucibus massa. Donec convallis elit id dolor mattis lacinia. Etiam vitae sem tortor. Proin eget sem nec turpis imperdiet hendrerit nec sed libero. Sed vitae massa eget elit egestas rutrum non id neque. Phasellus dictum, augue sed bibendum viverra, quam lacus porttitor ligula, nec congue nunc neque eget orci. Mauris efficitur nunc ac lectus porta, eu tincidunt felis pretium. Duis blandit tempor rutrum. Vivamus feugiat lobortis lacus. Proin in consequat dolor.',
        },
        {
          id: '14',
          content: 'the correlations',
        },
        {
          id: '15',
          content: 'the force',
        },

        {
          id: '16',
          content: 'none of the above are correct',
        },
      ],
    },
  ];
  return (
    <>
      <h1>Test here</h1>
      {testContent.map((test) => (
        <div key={test.id}>
          <Quiz test={test} />
        </div>
      ))}
      <button type="submit" class="btn btn-success">
        Submit
      </button>
    </>
  );
}

function Quiz(props) {
  const { question, options } = props.test;
  const [selectedOptions, setSelectedOptions] = useState(null);

  const handleChange = (e) => {
    e.persist();
    setSelectedOptions(e.target.value);
  };

  return (
    <Form>
      <Form.Group>
        <h5>{question}</h5>
        {options.map((option) => (
          <Form.Check
            value={option.content}
            type="radio"
            name={option.content}
            label={option.content}
            key={option.id}
            onChange={handleChange}
            checked={option.content === selectedOptions}
          />
        ))}
      </Form.Group>
    </Form>
  );
}
