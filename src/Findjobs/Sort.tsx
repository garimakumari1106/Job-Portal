import { useState } from 'react';
import { Button, Combobox, useCombobox, Text, Box, ComboboxDropdown } from '@mantine/core';
import { IconAdjustmentsAlt } from '@tabler/icons-react';

const groceries = [' Relevance', 'Most Recent', 'Salary (Low to High)', 'Salary (High to Low  )'];

const Sort = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>('Relevance');
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      
      <Combobox
        store={combobox}
        width={250}
        position="bottom-start"
        withArrow 
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
            <div onClick={()=>combobox.toggleDropdown()}  className='text-mine-shaft-bright-sun-500 flex text-xl gap-3 border-2 p-1 cursor-pointer border-mine-shaft-bright-sun-500 rounded-md'>         
                   {selectedItem}<IconAdjustmentsAlt stroke={2} height="20" width="20"/>
</div>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
export default Sort