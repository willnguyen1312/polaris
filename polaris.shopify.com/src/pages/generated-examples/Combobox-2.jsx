import { AppProvider, Tag,Listbox,Combobox,Icon,TextContainer,Stack } from "@shopify/polaris";
import { SearchMinor } from "@shopify/polaris-icons";
import { useMemo,useState,useCallback } from "react";
import '@shopify/polaris/build/esm/styles.css';
import translations from '@shopify/polaris/locales/en.json';
function MultiComboboxExample() {
  const deselectedOptions = useMemo(
    () => [
      {value: 'rustic', label: 'Rustic'},
      {value: 'antique', label: 'Antique'},
      {value: 'vinyl', label: 'Vinyl'},
      {value: 'vintage', label: 'Vintage'},
      {value: 'refurbished', label: 'Refurbished'},
    ],
    [],
  );

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState(deselectedOptions);

  const updateText = useCallback(
    (value) => {
      setInputValue(value);

      if (value === '') {
        setOptions(deselectedOptions);
        return;
      }

      const filterRegex = new RegExp(value, 'i');
      const resultOptions = deselectedOptions.filter((option) =>
        option.label.match(filterRegex),
      );
      setOptions(resultOptions);
    },
    [deselectedOptions],
  );

  const updateSelection = useCallback(
    (selected) => {
      if (selectedOptions.includes(selected)) {
        setSelectedOptions(
          selectedOptions.filter((option) => option !== selected),
        );
      } else {
        setSelectedOptions([...selectedOptions, selected]);
      }

      const matchedOption = options.find((option) => {
        return option.value.match(selected);
      });
      setInputValue((matchedOption && matchedOption.label) || '');
    },
    [options, selectedOptions],
  );

  const removeTag = useCallback(
    (tag) => () => {
      const options = [...selectedOptions];
      options.splice(options.indexOf(tag), 1);
      setSelectedOptions(options);
    },
    [selectedOptions],
  );

  const tagsMarkup = selectedOptions.map((option) => {
    let tagLabel = '';
    tagLabel = option.replace('_', ' ');
    tagLabel = titleCase(tagLabel);
    return (
      <Tag key={`option${option}`} onRemove={removeTag(option)}>
        {tagLabel}
      </Tag>
    );
  });

  const optionsMarkup =
    options.length > 0
      ? options.map((option) => {
          const {label, value} = option;

          return (
            <Listbox.Option
              key={`${value}`}
              value={value}
              selected={selectedOptions.includes(value)}
              accessibilityLabel={label}
            >
              {label}
            </Listbox.Option>
          );
        })
      : null;

  return (
    <div style={{height: '225px'}}>
      <Combobox
        allowMultiple
        activator={
          <Combobox.TextField
            prefix={<Icon source={SearchMinor} color="inkLighter" />}
            onChange={updateText}
            label="Search tags"
            labelHidden
            value={inputValue}
            placeholder="Search tags"
          />
        }
      >
        {optionsMarkup ? (
          <Listbox onSelect={updateSelection}>{optionsMarkup}</Listbox>
        ) : null}
      </Combobox>
      <TextContainer>
        <Stack>{tagsMarkup}</Stack>
      </TextContainer>
    </div>
  );

  function titleCase(string) {
    return string
      .toLowerCase()
      .split(' ')
      .map((word) => word.replace(word[0], word[0].toUpperCase()))
      .join('');
  }
}

function Example() {
  return (
    <AppProvider i18n={translations}>
      <div
        style={{
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 50px",
  }}
      >
        <MultiComboboxExample />
      </div>
    </AppProvider>
  );
}

export default Example;
    